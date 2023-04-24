import { users, quotes } from '../fakedb.js'
import User from '../model/User.js';
import Quote from '../model/query.js';
import jwt from 'jsonwebtoken'
import { JWT_KEY } from '../config/index.js';

const resolvers = {
    Query: {
        users: async () => await User.find({}),
        quotes: async () => {
            const data = await Quote.find({}).populate("by", "firstname")
            console.log(data)
            return data;
        },
        getUser: (_, { id }) => {
            return users.find(user => user.id == id);
        },
        userData: async (_, { }, { userid }) => {
            const data = await User.findById(userid);
            return {
                firstname: data.firstname,
                lastname: data.lastname,
                email: data.email
            }
        }
    },
    User: {
        quotes: (user) => quotes.filter(quote => quote.by == user.id)
    },

    Mutation: {
        // SignUpUser
        signupUser: async (_, { userNew }) => {
            const user = await User.findOne({ email: userNew.email });
            console.log(user)
            if (user) throw new Error("user is existed");
            const userSave = new User({
                ...userNew
            })

            await userSave.save();
            return userSave;

        },

        createQuotes: async (_, { data }, { userid }) => {
            if (!userid) throw new Error("token is not provided");
            console.log(data);
            const quote = new Quote({
                title: data.title,
                text: data.text,
                by: userid
            })
            console.log("userdata")
            await quote.save();
            return "Quote is Saved";
        },

        //SignInUser
        signInUser: async (_, { userNew }) => {
            const user = await User.findOne({ email: userNew.email });
            if (!user || user.password !== userNew.password) throw new Error("username or password is wrong 😟");
            const token = await jwt.sign({ userid: user._id, email: user.email }, JWT_KEY);
            return { token };

        }

    }
}


export default resolvers;
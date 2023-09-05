import Sequelize from "sequelize";
import PostModel from "./Post.js";
import CommentModel from "./Comment.js";

const db = new Sequelize("postgres://amberlynedmunds@localhost:5432/blog");

const Post = PostModel(db);
const Comment = CommentModel(db);

const connectToDB = async () => {
  try {
    await db.authenticate();
    console.log("Conected to database");

    //Comment.belongsTo(Post, { foreignKey: "postID" });
    Post.hasMany(Comment, { foreignKey: "postID" });

    db.sync();
  } catch (error) {
    console.error(error);
    console.error("PANIC! DB ISSUE.");
  }
};

connectToDB();

export { db, Post, Comment };

import { DateTime, OptimaDB, OptimaTable } from "@inflector/db";
import * as tables from "./tables";
const db = new OptimaDB(tables , { mode : "Disk" , path : "data"});

db.Tables.users.Insert({ username: "lassloussa", password: "lovesTimo", isActive: true });
db.Tables.users.Insert({ username: "timo", password: "lovesLoulou", isActive: true });
db.Tables.users.Insert({ username: "codeWiz", password: "pass123", isActive: true });
db.Tables.users.Insert({ username: "devQueen", password: "strongPass!", isActive: false });
db.Tables.users.Insert({ username: "photoFan", password: "camLife2025", isActive: true });
db.Tables.users.Insert({ username: "foodieMax", password: "eatSleepCode", isActive: true });
db.Tables.users.Insert({ username: "nightOwl", password: "midnightVibes", isActive: true });
db.Tables.users.Insert({ username: "sunnyDay", password: "smileAlways", isActive: false });
db.Tables.users.Insert({ username: "techGuru", password: "inno2025", isActive: true });
db.Tables.users.Insert({ username: "wanderlust", password: "travelMore", isActive: true });

db.Tables.follows.Insert({ follower: 1, following: 2 });
db.Tables.follows.Insert({ follower: 2, following: 1 });
db.Tables.follows.Insert({ follower: 1, following: 3 });
db.Tables.follows.Insert({ follower: 3, following: 1 });
db.Tables.follows.Insert({ follower: 4, following: 2 });
db.Tables.follows.Insert({ follower: 5, following: 6 });
db.Tables.follows.Insert({ follower: 6, following: 1 });
db.Tables.follows.Insert({ follower: 7, following: 2 });
db.Tables.follows.Insert({ follower: 8, following: 1 });
db.Tables.follows.Insert({ follower: 9, following: 3 });
db.Tables.follows.Insert({ follower: 10, following: 5 });

db.Tables.post.Insert({ content: "Just finished my first AI project!", userId: 1 });
db.Tables.post.Insert({ content: "Cherry blossoms are in full bloom 🌸", userId: 2 });
db.Tables.post.Insert({ content: "Debugging is like solving mysteries 🔍", userId: 3 });
db.Tables.post.Insert({ content: "Weekend getaway was amazing 🏞️", userId: 5 });
db.Tables.post.Insert({ content: "New recipe alert: matcha pancakes 🥞", userId: 6 });
db.Tables.post.Insert({ content: "Late-night coding session", userId: 7 });
db.Tables.post.Insert({ content: "Beach day vibes 🌊", userId: 8 });
db.Tables.post.Insert({ content: "Launching my startup soon 🚀", userId: 9 });
db.Tables.post.Insert({ content: "Hiking through the Alps!", userId: 10 });
db.Tables.post.Insert({ content: "Learning TypeScript is fun!", userId: 3 });

db.Tables.Post_likes.Insert({ userId: 2, postId: 1 });
db.Tables.Post_likes.Insert({ userId: 3, postId: 1 });
db.Tables.Post_likes.Insert({ userId: 1, postId: 2 });
db.Tables.Post_likes.Insert({ userId: 4, postId: 2 });
db.Tables.Post_likes.Insert({ userId: 5, postId: 3 });
db.Tables.Post_likes.Insert({ userId: 6, postId: 3 });
db.Tables.Post_likes.Insert({ userId: 7, postId: 4 });
db.Tables.Post_likes.Insert({ userId: 8, postId: 5 });
db.Tables.Post_likes.Insert({ userId: 9, postId: 6 });
db.Tables.Post_likes.Insert({ userId: 10, postId: 7 });

db.Tables.comments.Insert({ text: "That’s amazing work!", userId: 2, postId: 1 });
db.Tables.comments.Insert({ text: "I wish I could see them in person 🌸", userId: 5, postId: 2 });
db.Tables.comments.Insert({ text: "Story of my life 😂", userId: 7, postId: 3 });
db.Tables.comments.Insert({ text: "Looks so peaceful", userId: 8, postId: 4 });
db.Tables.comments.Insert({ text: "Send me the recipe!", userId: 1, postId: 5 });
db.Tables.comments.Insert({ text: "Relatable 😅", userId: 3, postId: 6 });
db.Tables.comments.Insert({ text: "Good luck with the launch!", userId: 4, postId: 8 });
db.Tables.comments.Insert({ text: "Wow, the Alps look stunning", userId: 6, postId: 9 });
db.Tables.comments.Insert({ text: "Same here, loving TS!", userId: 5, postId: 10 });

db.Tables.comment_likes.Insert({ userId: 3, commentId: 1 });
db.Tables.comment_likes.Insert({ userId: 4, commentId: 1 });
db.Tables.comment_likes.Insert({ userId: 1, commentId: 2 });
db.Tables.comment_likes.Insert({ userId: 6, commentId: 2 });
db.Tables.comment_likes.Insert({ userId: 2, commentId: 3 });
db.Tables.comment_likes.Insert({ userId: 5, commentId: 4 });
db.Tables.comment_likes.Insert({ userId: 7, commentId: 5 });
db.Tables.comment_likes.Insert({ userId: 8, commentId: 6 });
db.Tables.comment_likes.Insert({ userId: 9, commentId: 7 });
db.Tables.comment_likes.Insert({ userId: 10, commentId: 8 });
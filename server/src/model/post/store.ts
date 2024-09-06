import { Post } from "./schema";

export const posts: Post[] = [
    {
        id: 1,
        title: "Introduction to Football",
        description: "An in-depth guide to the basics of football.",
        category: "Sports",
        image: "https://images.pexels.com/photos/1193743/pexels-photo-1193743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        created_at: new Date("2023-01-15"),
    },
    {
        id: 2,
        title: "Latest in AI Technologies",
        description: "Exploring the advancements in Artificial Intelligence.",
        category: "Technologies",
        image: "https://images.pexels.com/photos/596710/pexels-photo-596710.jpeg?auto=compress&cs=tinysrgb&w=600",
        created_at: new Date("2023-03-22"),
    },
    {
        id: 3,
        title: "The Wonders of Space",
        description: "Understanding the vast universe around us.",
        category: "Sciences",
        image: null, // No image available
        created_at: new Date("2023-05-10"),
    },
    {
        id: 4,
        title: "History of Renaissance Art",
        description: "A look into the history of art during the Renaissance period.",
        category: "Arts",
        image: "https://images.pexels.com/photos/45229/drop-of-water-inject-water-drip-45229.jpeg?auto=compress&cs=tinysrgb&w=600",
        created_at: new Date("2023-07-01"),
    },
    {
        id: 5,
        title: "Advancements in Medicenes",
        description: "New developments in the medical field.",
        category: "Medicenes",
        image: "https://images.pexels.com/photos/1561020/pexels-photo-1561020.jpeg?auto=compress&cs=tinysrgb&w=600",
        created_at: new Date("2023-08-25"),
    },
    {
        id: 6,
        title: "Gourmet Cooking Techniques",
        description: "Elevate your cooking with these gourmet techniques.",
        category: "Foods",
        image: "https://images.pexels.com/photos/1582619/pexels-photo-1582619.jpeg?auto=compress&cs=tinysrgb&w=600",
        created_at: new Date("2023-09-05"),
    },
    {
        id: 7,
        title: "Untitled",
        description: "No category specified.",
        category: "Foods",
        image: null,
        created_at: new Date("2023-09-05"),
    },
];
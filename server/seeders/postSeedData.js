const seedData = [
    {
      id: "1",
      body: "This is the first post.",
      createdAt: "2023-05-09T10:30:00.000Z",
      username: "JohnDoe",
      userAvatar: "https://example.com/avatar1.jpg",
      comments: [
        {
          id: "1",
          createdAt: "2023-05-09T11:00:00.000Z",
          username: "JaneDoe",
          body: "Great post, thanks for sharing!",
        },
        {
          id: "2",
          createdAt: "2023-05-09T12:00:00.000Z",
          username: "JackDoe",
          body: "I agree, this is really interesting.",
        },
      ],
      likes: [
        {
          id: "1",
          createdAt: "2023-05-09T11:30:00.000Z",
          username: "JaneDoe",
        },
      ],
      likeCount: 1,
      commentCount: 2,
    },
    {
      id: "2",
      body: "This is the second post.",
      createdAt: "2023-05-10T10:30:00.000Z",
      username: "JaneDoe",
      userAvatar: "https://example.com/avatar2.jpg",
      comments: [
        {
          id: "3",
          createdAt: "2023-05-10T11:00:00.000Z",
          username: "JohnDoe",
          body: "This is really helpful, thanks!",
        },
      ],
      likes: [
        {
          id: "2",
          createdAt: "2023-05-10T11:30:00.000Z",
          username: "JohnDoe",
        },
        {
          id: "3",
          createdAt: "2023-05-10T12:30:00.000Z",
          username: "JackDoe",
        },
      ],
      likeCount: 2,
      commentCount: 1,
    },
  ];
  
  module.exports = seedData;
  
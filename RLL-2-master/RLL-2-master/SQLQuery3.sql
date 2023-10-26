USE Rllproject

CREATE TABLE Feedback (
    FeedbackID INT PRIMARY KEY IDENTITY(1,1),
    UserName NVARCHAR(255) NOT NULL,
    DishName NVARCHAR(255) NOT NULL,
    Category NVARCHAR(255) NOT NULL,
    Comment NVARCHAR(MAX),
    Rating Float
);
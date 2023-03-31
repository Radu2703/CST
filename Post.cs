namespace Practice1.Data.Entities
{
    public class Post
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string Content { get; set; }
        public string PictureURL { get; set; }
        public int Likes { get; set; }
        public int Dislikes { get; set; }
        public ICollection <Post> Comments { get; set;}
    }
}

namespace Practice1.Data.Entities
{
    public class Profile
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public User Owner { get; set; }
        public int UserId { get; set; }
        public FriendList Fl { get; set; }

    }
}

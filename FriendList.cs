namespace Practice1.Data.Entities
{
    public class FriendList
    {
        public int Id { get; set; }
        public User Owner { get; set; }
        public int UserId { get; set; }
        public ICollection<User> Friends { get; set; }
    }
}

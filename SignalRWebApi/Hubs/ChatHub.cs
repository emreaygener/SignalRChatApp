using Microsoft.AspNetCore.SignalR;
using SignalRWebApi.Models;

namespace SignalRWebApi.Hubs
{
    public class ChatHub : Hub
    {
        public async Task JoinChat(UserConnection conn)
        {
            await Clients.All.SendAsync("ReceiveMessage","admin", $"{conn.Username} has joined the chat room {conn.ChatRoom}");
        }

        public async Task JoinSpecificChatRoom(UserConnection conn)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, conn.ChatRoom);
            await Clients.Group(conn.ChatRoom).SendAsync("JoinSpecificChatRoom", "admin", $"{conn.Username} has joined the chat room {conn.ChatRoom}");
        }
    }
}
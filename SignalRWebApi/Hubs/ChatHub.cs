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
    }
}
using System.Collections.Concurrent;
using System.Globalization;
using SignalRWebApi.Models;

namespace SignalRWebApi.DataService
{
    public class SharedDB
    {
        private readonly ConcurrentDictionary<string, UserConnection> _connections = new ();

        public ConcurrentDictionary<string, UserConnection> connections => _connections;
    }
}
import { useState, useEffect } from "react";
import axios from "axios";

interface Notification {
  id: number;
  message: string;
}

function Notifications() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const es = new EventSource(
      "http://localhost:8000/api/notifications/stream"
    );

    es.onopen = () => {
      console.log("SSE connected");
      setLoading(false);
    };

    es.onmessage = (event) => {
      console.log("Incoming notification", event.data);
      const data = JSON.parse(event.data);
      setNotifications((prev) => [data, ...prev]);
    };

    return () => es.close();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 mt-10 ml-50">Notifications</h2>
      <ul>
        {notifications.map((notif) => (
          <li key={notif.id}>{notif.message}</li>
        ))}
      </ul>
    </div>
  );
}

export default Notifications;

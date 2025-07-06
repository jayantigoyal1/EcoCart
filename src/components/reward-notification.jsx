<<<<<<< HEAD
// components/reward-notification.jsx
export default function RewardNotification({ notification, onDismiss }) {
  if (!notification.show) return null;

  return (
    <div className="fixed bottom-24 left-4 right-4 bg-green-100 text-green-800 p-4 rounded shadow-lg z-20">
      <div className="flex justify-between items-center">
        <div>
          🎉 {notification.message} +{notification.points} eco points!
        </div>
        <button
          onClick={onDismiss}
          className="text-green-700 font-bold px-2 hover:underline"
        >
          Dismiss
        </button>
      </div>
    </div>
  );
}
=======
// components/reward-notification.jsx
export default function RewardNotification({ notification, onDismiss }) {
  if (!notification.show) return null;

  return (
    <div className="fixed bottom-24 left-4 right-4 bg-green-100 text-green-800 p-4 rounded shadow-lg z-20">
      <div className="flex justify-between items-center">
        <div>
          🎉 {notification.message} +{notification.points} eco points!
        </div>
        <button
          onClick={onDismiss}
          className="text-green-700 font-bold px-2 hover:underline"
        >
          Dismiss
        </button>
      </div>
    </div>
  );
}
>>>>>>> dcc7ab8493267304a6123d01b0f28bd294ecec1b



/**
 * Allows the Chat sense to output to the chat channel.
 */

public interface ChatListener {
	public void sendMessage(ChatEvent message);
}
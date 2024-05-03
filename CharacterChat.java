robjam1990.Psychosis.sense.chat;
/**
 * Chat message for input and output.
 */
public class ChatEvent {
	protected String nick;
	protected String message;
	protected boolean isWhisper;
	protected boolean greet;
	public boolean isWhisper() {
		return isWhisper;
	}
	public void setWhisper(boolean isWhisper) {
		this.isWhisper = isWhisper;
	}
	public String getNick() {
		return nick;
	}
	public void setNick(String nick) {
		this.nick = nick;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public boolean isGreet() {
		return greet;
	}
	public void setGreet(boolean greet) {
		this.greet = greet;
	}
}
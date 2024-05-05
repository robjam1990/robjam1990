package robjam1990.sense.text;


/**
 * Defines the properties of a text/chat input.
 */

public class TextInput  {
	protected String text;
	protected boolean isCorrection;
	protected boolean isOffended;
	
	public TextInput(String text) {
		this.text = text;
	}
	
	public TextInput(String text, boolean isCorrection, boolean isOffended) {
		this.text = text;
		this.isCorrection = isCorrection;
		this.isOffended = isOffended;
	}
	
	public String getText() {
		return text;
	}
	
	public void setText(String text) {
		this.text = text;
	}
	
	public boolean isCorrection() {
		return isCorrection;
	}
	
	public void setCorrection(boolean isCorrection) {
		this.isCorrection = isCorrection;
	}
	
	public boolean isOffended() {
		return isOffended;
	}
	
	public void setOffended(boolean isOffended) {
		this.isOffended = isOffended;
	}
	
}
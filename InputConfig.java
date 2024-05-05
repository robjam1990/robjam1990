package robjam1990.sdk.config;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

import robjam1990.sdk.util.Utils;
import org.w3c.dom.Element;
import org.w3c.dom.Node;


/**
 * DTO for XML input config.
 */
public class InputConfig extends Config {
	public String id;
	public String creationDate;
	public String speaker;
	public String target;
	public String value;
	
	public void parseXML(Element element) {
		this.id = element.getAttribute("id");
		this.creationDate = element.getAttribute("creationDate");
		this.speaker = element.getAttribute("speaker");
		this.target = element.getAttribute("target");
		
		Node node = element.getElementsByTagName("value").item(0);
		if (node != null) {
			this.value = node.getTextContent();
		}
	}

	public String displayCreationDate() {
		try {
			SimpleDateFormat formater = new SimpleDateFormat("EEE MMM dd HH:mm:ss zzz yyyy", Locale.US);
			Date date = formater.parse(creationDate);
			return Utils.displayTime(date);
		} catch (Exception exception) {
			return creationDate;
		}
	}
}
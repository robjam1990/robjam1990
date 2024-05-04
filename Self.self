// Initial Self programmed state machine for Comprehension
// This state machine is used by the bot to program itself.
state Self {case input goto sentenceState for each #word of sentence;
	state sentenceState 
	{// Code to process the sentence
		if (word == "hello") 
		{// Do something{}
		} 
		else if (word == "world") 
		{// Do something else{}
		} 
		else 
		{// Handle unknown words
			{}
		}
	}
}

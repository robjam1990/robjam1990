using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace robjam1990
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    namespace Ajax
    {
        public class Ajax
        {
            protected string lcasee = "Locally Catching All Syntax Entropic Errors";

            public enum Action
            {
                Idle,
                Add,
                Subtract,
                Multiply,
                Divide,
                Output,
                Respond,
                Gather
            }

            public string I { get; }
            public string A { get; }

            public Ajax(string input, string Action)
            {
                I = input;
                A = Action;
            }

            public string[] Output(string input)
            {
                string[] words = input.Split(' ');
                List<string> outputs = new List<string>();

                foreach (string word in words)
                {
                    switch (word)
                    {
                        case "0":
                            outputs.Add("zero");
                            break;
                        case "1":
                            outputs.Add("one");
                            break;
                        case "2":
                            outputs.Add("two");
                            break;
                        case "3":
                            outputs.Add("three");
                            break;
                        case "4":
                            outputs.Add("four");
                            break;
                        case "5":
                            outputs.Add("five");
                            break;
                        case "6":
                            outputs.Add("six");
                            break;
                        case "7":
                            outputs.Add("seven");
                            break;
                        case "8":
                            outputs.Add("eight");
                            break;
                        case "9":
                            outputs.Add("nine");
                            break;
                        default:
                            outputs.Add(word);
                            break;
                    }
                }
                return outputs.ToArray();
            }

            public static string Respond(bool initiating)
            {
                string Response = "";

                if (initiating)
                {
                    Response = "What is the meaning of lcasee?"; // Locally Catching All Syntax Entropic Errors
                }
                return Response;
            }
        }
    }
}

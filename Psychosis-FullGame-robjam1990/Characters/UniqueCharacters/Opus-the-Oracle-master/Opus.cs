//pi.ai(pitor)
using System;
using System.Collections.Generic;
using System.IO;
using static System.Net.Mime.MediaTypeNames;

namespace Opus
{
    class Oracle
    {
        static void Observe(string[] args)
        {
            KnowledgeBase knowledge = new KnowledgeBase(); // Initialize the knowledge base
                                             // Perform benchmark tests and interact with the artificial being
            RunBenchmarkTests(knowledge);

        }

        static void RunBenchmarkTests(KnowledgeBase knowledge)
        {
            
            Oracle oracle = new Oracle(); // Create an instance of the Oracle
            oracle.LearnFacts(knowledge); // Learn facts from the knowledge base
            Oracle.Observe(knowledge); // Observe the facts in the knowledge base


            // Generate some benchmark tests
            BenchmarkTest test1 = new BenchmarkTest("Test 1");
            BenchmarkTest test2 = new BenchmarkTest("Test 2");
            BenchmarkTest test3 = new BenchmarkTest("Test 3");

            // Run the benchmark tests
            test1.Run(knowledge);

            // Access and display the results
            Console.WriteLine(test1.Result);
            Console.WriteLine(test2.Result);
            Console.WriteLine(test3.Result);


        }

        private static void Observe(KnowledgeBase knowledge)
        {
            string fileName = "Opus.txt";

            using (FileStream fileStream = new FileStream(fileName, FileMode.Open))
            {
                using (StreamReader reader = new StreamReader(fileStream))
                {
                    string line;
                    while ((line = reader.ReadLine()) != null)
                    {
                        string[] parts = line.Split(',');
                        knowledge.LearnFact(parts[0], parts[1]);
                    }
                }
            }
        }

        private void LearnFacts(KnowledgeBase knowledge)
        {
            throw new NotImplementedException();
        }
    }

    internal class BenchmarkTest
    {
        private string v;

        public BenchmarkTest(string v)
        {
            this.v = v;
        }

        public bool Result { get; internal set; }

        internal void Run(KnowledgeBase knowledge)
        {
            throw new NotImplementedException();
        }
    }

    public class KnowledgeBase
    {
        private Dictionary<string, string> facts = new Dictionary<string, string>(); // Store facts in memory
        public void LearnFact(string key, string value)
        {
            facts[key] = value; // Store a fact
        }

        public string RecallFact(string key)
        {
            if (facts.TryGetValue(key, out string value)) // Retrieve a fact
            {
                return value;
            }
            else
            {
                return "Fact not found.";
            }
        }
    }
}

using static System.Console;

namespace Arkantos
{
    public class Ark
    {
        public DateTime Birthdate { get; set; }
        public Dictionary<string, Dictionary<string, int>>? Traits { get; set; }
        public int Experience { get; set; }
        public int Level { get; set; }
        public Dictionary<string, int>? Attributes { get; set; }
        public Dictionary<string, string>? Knowledge { get; set; }
        public Dictionary<string, object>? Inventory { get; set; }
        public Dictionary<string, int>? Reputation { get; set; }
        public Dictionary<string, object>? Relationships { get; set; }
        public Dictionary<string, string>? Quests { get; set; }
        public Dictionary<string, string>? Appearance { get; set; }
        public Dictionary<string, object>? Genetics { get; set; }


        public Ark()
        {
            Birthdate = DateTime.Now;
            Experience = 0;
            Level = 1;
            Traits = null;
            Attributes = Attributes;
            Knowledge = null;
            Inventory = Inventory;
            Reputation = null;
            Relationships = null;
            Quests = null;
        }

        public class Contract
        {
            public string Details { get; }
            public double? PredictedOutcome { get; private set; }

#pragma warning disable CS8618 // Non-nullable field must contain a non-null value when exiting constructor. Consider declaring as nullable.
            public Contract(string details)
#pragma warning restore CS8618 // Non-nullable field must contain a non-null value when exiting constructor. Consider declaring as nullable.
            {
                string Contract = "Contract";
                Contract Details = new Contract("Contract");
                Contract rewards = new Contract("Contract");
                PredictedOutcome = null;
            }

            // Method for setting the predicted outcome of a contract
            public void SetPredictedOutcome(double outcome)
            {
                PredictedOutcome = outcome;
                WriteLine($"Predicted outcome for contract '{Details}': {PredictedOutcome}");
            }
        }

        // Placeholder class for managing contracts available on the contract board
        public class noticeBoard
        {
            public string Details { get; }
            public int Reward { get; }
            private List<Contract> contracts = new List<Contract>();

            // Method for generating sample contracts
#pragma warning disable CS8618 // Non-nullable field must contain a non-null value when exiting constructor. Consider declaring as nullable.
            public noticeBoard()
#pragma warning restore CS8618 // Non-nullable field must contain a non-null value when exiting constructor. Consider declaring as nullable.
            {
                GenerateContracts();
                Contract contract = new Contract("Contract");
                contracts.Add(contract);
            }

            private void GenerateContracts()
            {
                for (int i = 0; i < 5; i++)
                {
                    string details = $"Contract {i + 1}";
                    Contract contract = new Contract(details);
                    contracts.Add(contract);
                }
            }

            // Method for retrieving available contracts from the contract board
            public List<Contract> GetAvailableContracts()
            {
                return contracts;
            }
        }

        // Placeholder method for processing the observed atmosphere
        private void ProcessAtmosphere(string atmosphere)
        {
            // Process the observed atmosphere and react accordingly
            WriteLine($"Observing atmosphere: {atmosphere}");
            if (atmosphere == "Tense and apprehensive")
            {
                WriteLine("The mercenary remains alert and vigilant.");
            }
            if (atmosphere == "Relaxed and jovial")
            {
                WriteLine("The mercenary relaxes and enjoys the atmosphere.");
            }
            else if (atmosphere == "Hostile and aggressive")
            {
                WriteLine("The mercenary prepares for potential conflict.");
            }
            else if (atmosphere == "Quiet and subdued")
            {
                WriteLine("The mercenary takes a moment to reflect.");
            }
        }

        public class Worker : BackgroundService
        {

            private readonly ILogger<Worker> _logger;

            public Worker(ILogger<Worker> logger)
            {
                _logger = logger;
            }



            protected override async Task ExecuteAsync(CancellationToken stoppingToken)
            {
                while (!stoppingToken.IsCancellationRequested)
                {
                    if (_logger.IsEnabled(LogLevel.Information))
                    {
                        _logger.LogInformation("Worker running at: {time}", DateTimeOffset.Now);
                    }
                    await Task.Delay(1000, stoppingToken);
                }
            }
        }
    }
}
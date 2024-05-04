namespace FileEditor
{
    class Program
    {
        private static List<Dictionary<string, string>> fileInfoList = new List<Dictionary<string, string>>();
        private static List<Dictionary<string, string>>? fileRenames;

        static void EditFiles()
        {
            CreateAndSaveTextFiles(fileInfoList);
            OpenFiles(fileInfoList);
            ExecuteFileContentChanges(fileInfoList);
            ExecuteFileRenames(fileRenames);
        }

        static void CreateAndSaveTextFiles(List<Dictionary<string, string>> fileInfoList)
        {
            foreach (var fileInfo in fileInfoList)
            {
                string filePath = fileInfo["file_path"];
                string text = fileInfo["text"];

                try
                {
                    File.WriteAllText(filePath, text);
                    Console.WriteLine($"File '{filePath}' created and saved.");
                }
                catch (Exception ex)
                {
                    Console.WriteLine($"Error creating or saving file '{filePath}': {ex.Message}");
                }
            }
        }

        static void OpenFiles(List<Dictionary<string, string>> fileInfoList)
        {
            foreach (var fileInfo in fileInfoList)
            {
                string filePath = fileInfo["file_path"];

                try
                {
                    System.Diagnostics.Process.Start(filePath);
                }
                catch (Exception ex)
                {
                    Console.WriteLine($"Error opening file '{filePath}': {ex.Message}");
                }
            }
        }

        static void ExecuteFileContentChanges(List<Dictionary<string, string>> fileInfoList)
        {
            foreach (var fileInfo in fileInfoList)
            {
                string filePath = fileInfo["file_path"];
                string newContent = fileInfo["new_content"];

                try
                {
                    File.WriteAllText(filePath, newContent);
                    Console.WriteLine($"Content of file '{filePath}' changed.");
                }
                catch (Exception ex)
                {
                    Console.WriteLine($"Error changing content of file '{filePath}': {ex.Message}");
                }
            }
        }

        static void ExecuteFileRenames(List<Dictionary<string, string>> fileInfoList)
        {
            foreach (var fileInfo in fileInfoList)
            {
                string filePath = fileInfo["file_path"];
                string newFilePath = fileInfo["new_file_name"];

                try
                {
                    File.Move(filePath, newFilePath);
                    Console.WriteLine($"File '{filePath}' renamed to '{newFilePath}'.");
                }
                catch (Exception ex)
                {
                    Console.WriteLine($"Error renaming file '{filePath}' to '{newFilePath}': {ex.Message}");
                }
            }
        }
    }
}

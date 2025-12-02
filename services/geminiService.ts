import { GoogleGenAI } from "@google/genai";

// Initialize Gemini Client
// Note: API_KEY must be provided in the environment or passed securely.
// In this frontend-only demo, we handle the case where it's missing gracefully.
const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("Gemini API Key is missing. Mocking response.");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const analyzeInteriorImage = async (file: File, prompt: string): Promise<string> => {
  const client = getClient();
  
  if (!client) {
    // Simulated delay for demo purposes
    await new Promise(resolve => setTimeout(resolve, 2000));
    return "Analysis simulation: This space could benefit from warmer lighting (3000K), biophilic elements such as indoor ficus lyrata, and a neutral sage color palette to reduce patient anxiety. (API Key missing for real generation)";
  }

  try {
    // Convert File to Base64
    const base64Data = await fileToGenerativePart(file);

    const modelId = "gemini-2.5-flash"; // Using flash for quick analysis/vision
    
    const response = await client.models.generateContent({
      model: modelId,
      contents: {
        parts: [
          {
            inlineData: {
              data: base64Data,
              mimeType: file.type,
            },
          },
          {
            text: `Act as a world-class interior designer for behavioral healthcare. Analyze this image and provide specific, actionable recommendations to make it more therapeutic and less clinical. ${prompt}`,
          },
        ],
      },
    });

    return response.text || "No analysis generated.";
  } catch (error) {
    console.error("Error analyzing image:", error);
    return "An error occurred during analysis. Please try again.";
  }
};

async function fileToGenerativePart(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = (reader.result as string).split(',')[1];
      resolve(base64String);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

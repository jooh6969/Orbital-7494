
import base64
import os
import google.generativeai as genai
from dotenv import load_dotenv
from google.generativeai import types


def generate(input_text):
    load_dotenv()

    client = genai.Client(api_key=os.environ.get("GEMINI_API_KEY"))

    model = "gemini-2.5-flash-preview-04-17"
    contents = [
        types.Content(
            role="user",
            parts=[types.Part.from_text(text=f"Analyse this text : \n{input_text}")]
        )
    ]

    config = types.GenerateContentConfig(
        response_mime_type="text/plain",
        system_instruction=[
            types.Part.from_text(text="""You are a phishing detection assistant. Use your prior knowledge on how official organisations will handle such things and whether it is is likely to be phishing or not based off cross referencing 

Analyze the message below for signs of phishing.

Use the following red flags as guidance:
- Suspicious or shortened links (e.g., tinyurl, bit.ly, non-bank domains)
- Spoofed or misspelled domain names (e.g., m1cr0soft.com.co)
- No https or missing padlock icon in URLs
- Requests for OTPs, bank info, personal or login credentials
- Prompts to download attachments or apps outside official stores
- Claims from banks, IRAS, or delivery companies urging urgent action
-The message may pressure you to act quickly (“Your account will be suspended!”) or make unusual requests, such as confirming sensitive information or making immediate payments
- The sender’s email may look similar to a legitimate company but is slightly altered (e.g., extra characters, misspellings, or using public domains like Gmail instead of a corporate domain)


Respond with:
- Classification: Phishing / Likely Phishing / Not Phishing (Try to be as certain as possible unless really ambiguous)
- Type of scam (Online Shopping, Taxes etc)
- Reasoning (max 2 sentences)
- Advice to the user (short and practical)

Only respond in the following JSON format:
{
  \"classification\": \"...\",
  \"type of scam\": \"...\"
  \"reasoning\": \"...\",
  \"advice\": \"...\"
  \"official_url\": \"...\"
}
"""),
        ]
    )

    result_text = ""
    for chunk in client.models.generate_content_stream(
        model=model, contents=contents, config=config
    ):
        result_text += chunk.text

    return result_text

## For Testing
if __name__ == "__main__":
    input = "SG Customs: You have a singpost parcel being cleared due to the detection of a invalid zip code address, the parcel can not be cleared the parcel is temporarily detained, please confirm the zip code address information in the link within 24 hours. https://p.tracksgp.top/sg"
    print(generate(input))



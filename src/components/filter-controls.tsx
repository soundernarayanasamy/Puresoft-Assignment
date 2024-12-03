"use client"

import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


const handleDownload = async () => {
  try {
    // Your JSON data, including the full structure
    const jsonData = {
      "metrics": {
        "active_users": { "current": 27, "total": 80 },
        "questions_answered": 3298,
        "average_session_length_seconds": 154,
        "starting_knowledge_percentage": 64,
        "current_knowledge_percentage": 86
      },
      "api_secret": "123abc"
    };

    // Extract `api_secret` from the JSON data
    const apiSecret = jsonData.api_secret;

    // Proxy to bypass CORS for development (ensure cors-anywhere is running on port 8080)
    const proxyUrl = 'http://localhost:8080/'; // Local proxy URL
    const apiUrl = 'https://testd5-img.azurewebsites.net/api/imgdownload';

    // Perform the POST request
    const response = await fetch(proxyUrl + apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ api: apiSecret }),
    });

    // Log the full response to see if there are any issues
    if (!response.ok) {
      throw new Error('Failed to fetch image. Status: ' + response.status);
    }

    const data = await response.json();
    console.log('API Response:', data);  // Log the response to check

    // Check if the "base64_string" key exists in the response
    const base64String = data.base64_string;
    if (!base64String) {
      throw new Error('Invalid response: Missing "base64_string" key');
    }

    // Convert Base64 to Blob and trigger download
    const blob = await fetch(`data:image/png;base64,${base64String}`).then((res) => res.blob());
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'downloaded-image.png'; // The name of the downloaded image
    a.click();
    URL.revokeObjectURL(url); // Clean up the URL object after downloading
  } catch (error) {
    console.error('Error downloading the image:', error.message); // Log the error message
  }
};

export function FilterControls() {
  return (
    <div className="grid gap-4 mb-6">
      <div className="flex flex-col md:flex-row gap-4">
        <Select defaultValue="all-time">
          <SelectTrigger className="w-full md:w-[200px]">
            <SelectValue placeholder="Timeframe" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-time">All-time</SelectItem>
            <SelectItem value="this-month">This Month</SelectItem>
            <SelectItem value="last-7-days">Last 7 Days</SelectItem>
            <SelectItem value="this-year">This Year</SelectItem>
            <SelectItem value="custom">Custom</SelectItem>
          </SelectContent>
        </Select>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-full md:w-[200px] justify-between">
              Multiple Selected
              <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">Clear</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[300px] p-0" align="start">
            <Command>
              <CommandInput placeholder="Search..." />
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="GROUPS">
                <CommandItem className="flex items-center gap-2">
                  <div className="w-4 h-4 border rounded flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary rounded-sm" />
                  </div>
                  All Users
                  <span className="ml-auto text-muted-foreground">400</span>
                </CommandItem>
                <CommandItem className="flex items-center gap-2">
                  <div className="w-4 h-4 border rounded" />
                  Managers
                  <span className="ml-auto text-muted-foreground">14</span>
                </CommandItem>
                <CommandItem className="flex items-center gap-2">
                  <div className="w-4 h-4 border rounded" />
                  Trainers
                  <span className="ml-auto text-muted-foreground">4</span>
                </CommandItem>
              </CommandGroup>
              <CommandGroup heading="USERS">
                <CommandItem className="flex items-center gap-2">
                  <div className="w-4 h-4 border rounded flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary rounded-sm" />
                  </div>
                  Adrian Lu
                </CommandItem>
                <CommandItem className="flex items-center gap-2">
                  <div className="w-4 h-4 border rounded" />
                  Evelyn Hamilton
                </CommandItem>
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>

        <Select defaultValue="all">
          <SelectTrigger className="w-full md:w-[200px]">
            <SelectValue placeholder="Topic" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="safety">Safety</SelectItem>
            <SelectItem value="compliance">Compliance</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline" onClick={handleDownload}>
        Download
      </Button>
      </div>
      
    </div>
  )
}

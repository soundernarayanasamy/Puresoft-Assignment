"use client"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import api_data from '../json-data/task-data.json'

const handleDownload = async () => {
  try {

    const apiSecret = api_data.api_secret;
    const proxyUrl = 'http://localhost:8080/';
    const apiUrl = 'https://testd5-img.azurewebsites.net/api/imgdownload';

    const response = await fetch(proxyUrl + apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ api: apiSecret }),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch image. Status: ' + response.status);
    }

    const data = await response.json();
    console.log('API Response:', data);


    const base64String = data.base64_string;
    if (!base64String) {
      throw new Error('Invalid response: Missing "base64_string" key');
    }

    const blob = await fetch(`data:image/png;base64,${base64String}`).then((res) => res.blob());
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'downloaded-image.png';
    a.click();
    URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Error downloading the image:');
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

        <Select >
          <SelectTrigger className="w-full md:w-[200px] justify-between">
            <SelectValue placeholder="Multiple Selected" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Groups</SelectLabel>
              <SelectItem value="all-users">
                All Users (400)
              </SelectItem>
              <SelectItem value="managers">
                Managers (14)
              </SelectItem>
              <SelectItem value="trainers">
                Trainers (4)
              </SelectItem>
            </SelectGroup>

            <SelectGroup>
              <SelectLabel>Users</SelectLabel>
              <SelectItem value="adrian-lu">
                Adrian Lu
              </SelectItem>
              <SelectItem value="evelyn-hamilton">
                Evelyn Hamilton
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

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

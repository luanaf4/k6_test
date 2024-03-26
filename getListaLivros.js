import http from 'k6/http';
import { sleep } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = {
  stages: [
    { duration: "20s", target: 80 }, 
    { duration: "30s", target: 200 }, 
    { duration: "40s", target: 400 }, 
    { duration: "20s", target: 0 }, 
  ]
}

export default function () {
  http.get('https://simple-books-api.glitch.me/books?type=fiction');
  sleep(1);
}

export function handleSummary(data) {
  return {
    "summary.html": htmlReport(data),
  };
}

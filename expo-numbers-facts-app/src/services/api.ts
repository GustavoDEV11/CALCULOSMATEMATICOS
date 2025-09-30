import axios from 'axios';

export interface NumbersApiResponse {
  text: string;
  number: number;
  found: boolean;
  type: string;
}

const BASE_URL = 'https://numbersapi.com';

export async function fetchRandomFact(): Promise<NumbersApiResponse> {
  const url = `${BASE_URL}/random/math?json`;
  const response = await axios.get<NumbersApiResponse>(url, { timeout: 5000 });
  return response.data;
}
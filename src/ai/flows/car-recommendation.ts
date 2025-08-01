// Implemented the car recommendation flow using Genkit to provide personalized car suggestions based on user preferences and rental history.

'use server';

/**
 * @fileOverview Car recommendation AI agent.
 *
 * - carRecommendation - A function that recommends cars based on user preferences and past rentals.
 * - CarRecommendationInput - The input type for the carRecommendation function.
 * - CarRecommendationOutput - The return type for the carRecommendation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CarRecommendationInputSchema = z.object({
  preferences: z
    .string()
    .describe('The user car preferences, specified as a text string.'),
  pastRentals: z
    .string()
    .describe('The user past car rentals, specified as a text string.'),
});

export type CarRecommendationInput = z.infer<typeof CarRecommendationInputSchema>;

const CarRecommendationOutputSchema = z.object({
  recommendation: z.string().describe('The car recommendation, based on preferences and past rentals.'),
});

export type CarRecommendationOutput = z.infer<typeof CarRecommendationOutputSchema>;

export async function carRecommendation(input: CarRecommendationInput): Promise<CarRecommendationOutput> {
  return carRecommendationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'carRecommendationPrompt',
  input: {schema: CarRecommendationInputSchema},
  output: {schema: CarRecommendationOutputSchema},
  prompt: `You are an expert car recommendation agent.

You will use the preferences and past rentals to recommend the most suitable car for the user.

Preferences: {{{preferences}}}
Past Rentals: {{{pastRentals}}}

Recommendation:`,
});

const carRecommendationFlow = ai.defineFlow(
  {
    name: 'carRecommendationFlow',
    inputSchema: CarRecommendationInputSchema,
    outputSchema: CarRecommendationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

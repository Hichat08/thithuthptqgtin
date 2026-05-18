/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export enum QuestionType {
  SINGLE_CHOICE = 'SINGLE_CHOICE',
  TRUE_FALSE = 'TRUE_FALSE',
}

export interface Option {
  id: string;
  text: string;
}

export interface SubQuestion {
  id: string;
  text: string;
  correctAnswer: boolean; // true = Đúng, false = Sai
}

export interface Question {
  id: number;
  type: QuestionType;
  content: string;
  imageUrl?: string;
  options?: Option[]; // For SINGLE_CHOICE
  correctOptionId?: string; // For SINGLE_CHOICE
  subQuestions?: SubQuestion[]; // For TRUE_FALSE
}

export type QuizStatus = 'LOGIN' | 'RUNNING' | 'FINISHED' | 'ADMIN';

export interface UserInfo {
  name: string;
  className: string;
}

export interface QuizResultRecord extends ResultBreakdown {
  id: string;
  user: UserInfo;
  timestamp: number;
}

export interface ResultBreakdown {
  totalScore: number;
  part1Score: number;
  part2Score: number;
  part1CorrectCount: number;
  part2FullyCorrectCount: number;
  timeSpentSeconds: number;
}

export interface ResponseData {
    translatedText: string;
    match: number;
}

export interface Match {
    id: string;
    segment: string;
    translation: string;
    source: string;
    target: string;
}

export interface TranslateWord {
    responseData: ResponseData;
    responseStatus: number;
    matches: Match[];
}
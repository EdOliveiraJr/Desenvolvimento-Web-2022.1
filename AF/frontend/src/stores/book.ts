import {defineStore} from "pinia"
import api from "../services/api"

export interface Book {
    title: string;
    publisher: string;
    rating: number;
    category: string;
}

interface State {
    book: Book;
}



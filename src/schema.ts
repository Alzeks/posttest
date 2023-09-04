export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      comments: {
        Row: {
          comment: string | null
          commentator: string | null
          created_at: string
          id: number
          post_id: number | null
        }
        Insert: {
          comment?: string | null
          commentator?: string | null
          created_at?: string
          id?: number
          post_id?: number | null
        }
        Update: {
          comment?: string | null
          commentator?: string | null
          created_at?: string
          id?: number
          post_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "comments_post_id_fkey"
            columns: ["post_id"]
            referencedRelation: "posts"
            referencedColumns: ["id"]
          }
        ]
      }
      posts: {
        Row: {
          author: string | null
          context: string | null
          created_at: string
          id: number
          title: string | null
          user_id: number | null
        }
        Insert: {
          author?: string | null
          context?: string | null
          created_at?: string
          id?: number
          title?: string | null
          user_id?: number | null
        }
        Update: {
          author?: string | null
          context?: string | null
          created_at?: string
          id?: number
          title?: string | null
          user_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "posts_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      users: {
        Row: {
          created_at: string
          email: string | null
          id: number
          isAuthor: boolean | null
          password: string | null
          username: string | null
        }
        Insert: {
          created_at?: string
          email?: string | null
          id?: number
          isAuthor?: boolean | null
          password?: string | null
          username?: string | null
        }
        Update: {
          created_at?: string
          email?: string | null
          id?: number
          isAuthor?: boolean | null
          password?: string | null
          username?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

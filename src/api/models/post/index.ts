interface Comment {
    id: number;
    postId: number;
    userNo: number;
    content: string;
    createdAt: string; // ISO 8601 형식의 날짜 문자열
    updatedAt: string; // ISO 8601 형식의 날짜 문자열
}

interface ImageUrl {
    type: 'IMAGE';
    url: string;
}

export interface PostListResponseTypes {
    commentCount: number;
    comments: Comment[]; // Comment 배열
    contents: string;
    createdAt: string; // ISO 8601 형식의 날짜 문자열
    imageUrls: ImageUrl[]; // ImageUrl 배열
    isCommentDisabled: boolean;
    isLiked: boolean;
    likeCount: number;
    location: string;
    mediaType: 'IMAGE' | 'VIDEO' | 'TEXT'; // 다른 미디어 타입이 있을 경우 추가 가능
    mentions: string[]; // 문자열 배열
    postId: number;
    tags: string[]; // 문자열 배열
    updatedAt: string; // ISO 8601 형식의 날짜 문자열
    userName: string;
    userNo: number;
    userProfileImage: string; // 프로필 이미지 URL
}

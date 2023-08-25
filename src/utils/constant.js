export const GOOGLE_API_KEY = "AIzaSyA8vlCFdfAlxdt2KxQsVNMa47rFRgPopd0";

export const OFFSET_LIVE_CHAT = 250;

export const YOUTUBE_DATA_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=150&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_MOST_POPULAR_BASE =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=";

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_VIDEO_SEARCH_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=";

export const YOUTUBE_COMMENT_API =
  "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&order=relevance&key=" +
  GOOGLE_API_KEY +
  "&videoId=";

export const YOUTUBE_LIVE_CHAT =
  "https://youtube.googleapis.com/youtube/v3/liveChat/messages?key=" +
  GOOGLE_API_KEY;

export const BASE_YOUTUBE_URL = "https://youtube.googleapis.com/youtube/v3";

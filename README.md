# Youtube Me

Youtube Me is a simple React-based web application that allows users to search for YouTube videos and view details about them. The app fetches data from the YouTube API and displays video results based on user queries. When a user clicks on a video, it shows the video along with its details.

## Features

- **Search Videos**: Users can search for YouTube videos by entering keywords.
- **View Video Details**: Clicking on a video will display its details such as title, description, and more.
- **Responsive Design**: The app is designed to be responsive and works well on both desktop and mobile devices.

## Technologies Used

- **Frontend**: React
- **API**: YouTube Data API v3
- **HTTP Client**: Axios

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need to have Node.js and npm installed on your machine.

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/DanielMituku/youtube-me.git
   ```
2. Navigate to the project directory
   ```sh
   cd youtube-me
   ```
3. Install NPM packages
   ```sh
   npm install
   ```

### Setup API Key

You need to obtain a YouTube Data API v3 key from the [Google Developers Console](https://console.developers.google.com/).

1. Create a `.env` file in the root directory of the project.
2. Add your YouTube API key to the `.env` file:
   ```
   REACT_APP_YOUTUBE_API_KEY=your_api_key_here
   ```

### Running the App

1. Start the development server
   ```sh
   npm start
   ```
2. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Usage

1. **Search for Videos**: Use the search bar at the top to enter keywords for the videos you want to find.
2. **View Video Details**: Click on any video from the search results to view its details.

## Project Structure

```
youtube-me/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
|   |   |-- VideoItem.css
│   │   ├── VideoList.js
│   │   ├── VideoItem.js
│   │   ├── VideoDetail.js
│   │   └── SearchBar.js
│   ├── api/
│   │   └── youtube.js
│   ├── App.js
│   ├── index.js
│   └── ...
├── .env
├── package.json
└── README.md
```

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Project Link: [https://github.com/DanielMituku/youtube-me](https://github.com/DanielMituku/youtube-me)

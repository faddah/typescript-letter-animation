
# Typing Letter Animation Using TypeScript

[![Web Dev Simplified's (Kyle) Video on "Can I Create This Typing Animation Using TypeScript?"](http://i3.ytimg.com/vi/gWD0EJgBlYQ/hqdefault.jpg)](https://www.youtube.com/watch?v=gWD0EJgBlYQ)

## From **[Web Dev Simplified](https://www.youtube.com/@WebDevSimplified)'s** instructional YouTube video, **"[Can I Create This Typing Animation Using TypeScript?](https://www.youtube.com/watch?v=gWD0EJgBlYQ)"**

### Before Anything Else, `cd` into this project directory and install all dependencies (or nothing will run) —

```zsh
npm install
```

### To Build This Project —

```bash
npm run build
```

### To Start a Dev Server —

```zsh
npm run dev
```

### To See In Preview —

```zsh
npm run previews
```

### To Run As If In Production —

```zsh
npm start
```

### To Watch TypeScript Types —

```zsh
npm run types
```

### This is now a Dockerized container

#### To Build the Docker Image —

```zsh
docker build -t typescript-letter-animation .
```

#### To Run the Docker Container —

```zsh
docker run -d -p 5173:5173 --name typescript-letter-animation-container typescript-letter-animation
```

#### To see the logs of the running Vite server in the running Docker Container —”

```zsh
docker logs -f typescript-letter-animation-container
```

#### To SSH into the running Docker Container — 

```zsh
docker exec -it typescript-letter-animation-container /bin/bash
```

#### To Stop the Running Docker Container —

```zsh
docker stop typescript-letter-animation-container
```

#### To Remove the Stopped Docker Container —

```zsh
docker rm typescript-letter-animation-container
```

#### To Remove the Docker Image (helpful if you're about to rebuild the whole Docker Image) —

```zsh
docker rmi typescript-letter-animation
```

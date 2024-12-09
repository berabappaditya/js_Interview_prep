1. Global Object Methods
console.log(): Prints messages to the console.
setTimeout() / clearTimeout(): Sets and clears timers.
setInterval() / clearInterval(): Sets and clears intervals.
setImmediate() / clearImmediate(): Schedules immediate execution.
2. File System (fs) Module Methods
fs.readFile() / fs.readFileSync(): Reads files.
fs.writeFile() / fs.writeFileSync(): Writes to files.
fs.appendFile(): Appends data to a file.
fs.unlink(): Deletes a file.
fs.mkdir(): Creates a directory.
3. HTTP Module Methods
http.createServer(): Creates an HTTP server.
http.request(): Makes an HTTP request.
http.get(): Simplified method for HTTP GET requests.
res.writeHead(): Sets the HTTP status and headers.
res.end(): Ends an HTTP response.
4. URL Module Methods
new URL(): Parses a URL.
url.format(): Formats a URL object back into a string.
url.resolve(): Resolves a target URL relative to a base.
5. Stream Module Methods
stream.pipe(): Connects readable streams to writable streams.
stream.read(): Reads data from a readable stream.
stream.write(): Writes data to a writable stream.
6. Path Module Methods
path.join(): Joins paths.
path.resolve(): Resolves paths.
path.basename(): Gets the last part of a path.
path.dirname(): Gets the directory name of a path.
7. Crypto Module Methods
crypto.createHash(): Creates a hash.
crypto.createCipheriv(): Creates a cipher for encryption.
crypto.createDecipheriv(): Creates a decipher for decryption.
crypto.randomBytes(): Generates random bytes.
8. OS Module Methods
os.cpus(): Returns information about the CPUs.
os.totalmem() / os.freemem(): Returns total and free memory.
os.uptime(): Returns system uptime.
9. Process Object Methods
process.exit(): Exits the process.
process.cwd(): Gets the current working directory.
process.chdir(): Changes the working directory.
process.env: Accesses environment variables.
10. Events Module
EventEmitter.on(): Registers an event listener.
EventEmitter.emit(): Emits an event.
EventEmitter.once(): Registers a one-time listener.
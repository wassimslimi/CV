import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve the CV PDF file
  app.get('/api/cv/download', (req, res) => {
    const cvPath = path.resolve(process.cwd(), 'attached_assets/CV-FR.pdf');
    res.download(cvPath, 'Wessim-Slimi-CV.pdf');
  });

  const httpServer = createServer(app);

  return httpServer;
}

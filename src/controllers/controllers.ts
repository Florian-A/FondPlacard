import { Request, Response } from "express";

export class TestController {
  
  public helloWorld(req: Request, res: Response) {
    res.json({
      message: "Hello World !"
    });
  }
}
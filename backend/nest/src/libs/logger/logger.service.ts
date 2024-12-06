import { Injectable } from '@nestjs/common';
import { LoggerPort } from './logger.interface';
import * as winston from 'winston';

@Injectable()
export class LoggerService implements LoggerPort {
  private context = 'Application';
  private logger: winston.Logger;

  constructor() {
    this.logger = winston.createLogger({
      level: 'info',
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(
          ({ level, message, timestamp }) =>
            `[${timestamp}] [${level.toUpperCase()}] [${this.context}] ${message}`,
        ),
      ),
      transports: [new winston.transports.Console()],
    });
  }

  log(message: string, ...meta: unknown[]): void {
    this.logger.info(message, meta);
  }

  error(message: string, trace?: unknown, ...meta: unknown[]): void {
    this.logger.error(`${message} ${trace ? `Trace: ${trace}` : ''}`, meta);
  }

  warn(message: string, ...meta: unknown[]): void {
    this.logger.warn(message, meta);
  }

  debug(message: string, ...meta: unknown[]): void {
    this.logger.debug(message, meta);
  }

  setContext(context: string): void {
    this.context = context;
  }
}

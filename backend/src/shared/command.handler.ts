import { CreateTermCommand } from '../terms/application/create-term.command';
import { Command } from './command';

export interface CommandHandler {
    execute(command: Command): Promise<unknown>;
}

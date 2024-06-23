import { Command } from './command';

export interface CommandHandler<CommandToExecute extends Command> {
    execute(command: CommandToExecute): Promise<unknown>;
}

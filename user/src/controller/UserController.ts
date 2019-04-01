import { getRepository } from 'typeorm';
import { NextFunction, Request, Response } from 'express';
import { User } from '../entity';
import { BlockCypherProvider } from '../providers';

export class UserController {
    private _blockCypherProvider;

    constructor() {
    	this._blockCypherProvider = new BlockCypherProvider();
    }

    async getUser(request: Request, response: Response, next: NextFunction) {
    	let userRepository = getRepository(User);
    	let email = request.params.email;
    	let user = await userRepository.findOne({email: email});

    	if (user !== undefined){
    		response.status(200).json({
    			wallet: user.wallet
    		});
    	} else {
    		// user is not found
    		response.sendStatus(404);
    	}
    }

    async createUser(request: Request, response: Response, next: NextFunction) {
    	let userRepository = getRepository(User);
    	let wallet = await this._blockCypherProvider.generateWallet();
    	let email = request.body.email;

    	let newUser = new User();
    	newUser.email = email;
    	newUser.wallet = wallet.address;
    	newUser.private_key = wallet.private;

    	await userRepository.save(newUser);
    	response.status(200).json({
    		wallet: newUser.wallet
    	});
    }
}
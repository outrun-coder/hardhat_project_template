import { ethers } from 'hardhat';
import { expect } from 'chai';

describe('Token Contract:', () => {
  const name: string = 'Scratch';

  let tokenContract;

  beforeEach(async() => {
    const contractFactory = await ethers.getContractFactory('Token');
    tokenContract = await contractFactory.deploy();
  });

  describe('Deployment:', () => {
    it('Has correct name', async () => {
      expect(await tokenContract.name()).to.equal(name);
    });
  });
});
export class Character {
    
    constructor(char, nameEng, nameFin)
    {
      this.char = char;
      this.nameEng = nameEng;
      this.nameFin = nameFin;
      this.unicode = char.codePointAt();
    }
};  
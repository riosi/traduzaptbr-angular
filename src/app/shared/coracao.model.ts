import { environment } from "../../environments/environment";
export class Coracao {
    constructor(
        public cheio: boolean,
        public urlCoracaoCheio: string = `${environment.assetsRoot}/coracao_cheio.png`,
        public urlCoracaoVazio: string = `${environment.assetsRoot}/coracao_vazio.png`
    ) {}

    public exibeCoracao(): string {
        if (this.cheio) {
            return this.urlCoracaoCheio
        } else {
            return this.urlCoracaoVazio
        }
    }
}
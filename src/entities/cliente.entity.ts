import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'CLIENTE' })
export class ClienteEntity {
  @PrimaryColumn({ name: 'IDCLI', nullable: false })
  idcli: number;

  @Column({ name: 'NOMCLI', nullable: false })
  nomcli: string;

  @Column({ name: 'APECLI', nullable: false })
  apecli: string;

  @Column({ name: 'DNICLI', nullable: false })
  dnicli: string;

  @Column({ name: 'EMACLI', nullable: false })
  emacli: string;

  @Column({ name: 'CELCLI', nullable: false })
  celcli: string;

  @Column({ name: 'DOMCLI', nullable: false })
  domcli: string;

  @Column({ name: 'ESTCLI', nullable: false })
  estcli: string;

  @Column({ name: 'CODUBI', nullable: false })
  codubi: string;
}

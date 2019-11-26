<?php

use Illuminate\Database\Seeder;
use App\Etudiant;
class EtudiantsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        Etudiant::truncate();
        $faker = Faker\Factory::create('fr_FR');
        for($i=0;$i<50;$i++){
         	$etudiant = new Etudiant;
         	$etudiant->matricule = $faker->unique()->phoneNumber;
         	$etudiant->niveau = $faker->randomDigit;
            $etudiant->nom = $faker->lastName;
            $etudiant->prenom = $faker->firstName;
            $etudiant->dateNaissance = $faker->dateTimeThisCentury->format('Y-m-d');
            $etudiant->lieuNaissance = $faker->name;
            $etudiant->email = $faker->unique()->email;
            $etudiant->tel = $faker->phoneNumber;
            $etudiant->save();
    	}
    }
}

var canvas = new fabric.Canvas('myCanvas'); 

super_hero_image_width = 30; 

super_hero_image_height = 30; 

player_x = 10; player_y = 10; 

var player_object = ""; 

var super_hero_image_object = ""; 

function player_update()
 { fabric.Image.fromURL("player (1).png", function (Img) 
 { 
     player_object = Img; 
    player_object.scaleToWidth(150); 
    player_object.scaleToHeight(140); 
    player_object.set({ top: player_y, left: 
        player_x }); canvas.add(player_object); 
    }); 
} 

function new_image(get_image) { fabric.Image.fromURL("player (1).png", function (Img) { super_hero_image_object = Img; 
    super_hero_image_object.scaleToWidth(super_hero_image_width); 
    super_hero_image_object.scaleToHeight(super_hero_image_height); 
    super_hero_image_object.set({ top: player_y, left: player_x }); 
    canvas.add(super_hero_image_object); 
}); }
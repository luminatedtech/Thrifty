Rails.configuration.stripe= {
    :publishable_key => ENV["pk_test_51NNhPXFlyTUX9bWPFpoF4xXPgZ4mu7krSbtMrT8RwkRr3jV4BiEYCjZnXTEjSEcP400Avsy7ChlM9S1KuODNMGAK002pBiKzsE"],
    :secret_key => ENV["sk_test_51NNhPXFlyTUX9bWPl4gNPUafoEU4L3d4xFn1hMdnLBDXs28ZWbt0yAxD1wn2lZVEfI1C5nZSJ2724KXZQLUcESk500Vo5b3SNL"]
}
Stripe.api_key = Rails.configuration.stripe[:secret_key]